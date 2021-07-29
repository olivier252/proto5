import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { RayonService } from '../../services/rayon.service';

@Component({
  selector: 'app-zone-utility',
  templateUrl: './zone-utility.component.html',
  styleUrls: ['./zone-utility.component.scss']
})
export class ZoneUtilityComponent implements OnInit {

  @Input() isMobilePortrait: boolean;

  refFormGroup: FormGroup;
  itemsMenu: any[];
  itemsProduct = this.rayonService.items;
  itemProduct: Product;
  refBarCodePattern = "[0-9]{3}";

  constructor(
    private rayonService: RayonService,
    private router: Router,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.itemsMenu = this.rayonService.itemsMenu;
    this.initRefForm();
  }

  initRefForm() {
    this.refFormGroup = this.formBuilder.group({
      barcode: ['', [Validators.required, Validators.pattern(this.refBarCodePattern)]]
    });
  }

  openErrorSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }

  onSubmitRefForm() {
    let currentItemCodeBar = this.refFormGroup.get('barcode').value;

    if (this.refFormGroup.get('barcode').invalid) {
      this.openErrorSnackBar("Erreur de saisie...", '');
    } else {
      this.itemsProduct.find(item => {
        if (item.codeModele === currentItemCodeBar) {
          this.router.navigate(['/zone', item.codeModele]);
        }
      });
      this.refFormGroup.reset();
    }
  }
}
