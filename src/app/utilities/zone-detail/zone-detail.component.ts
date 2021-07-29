import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { RayonService } from 'src/app/services/rayon.service';

@Component({
  selector: 'app-zone-detail',
  templateUrl: './zone-detail.component.html',
  styleUrls: ['./zone-detail.component.scss']
})
export class ZoneDetailComponent implements OnInit {
  zoneFormGroup: FormGroup;
  codeBar: any;
  itemProduct: Product;
  zoneBarCodePattern = "[0-9]{3}";

  constructor(
    private activatedRoute: ActivatedRoute,
    private rayonService: RayonService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(params => {
      this.codeBar = params.get('id');
      let products = this.rayonService.items;
      this.itemProduct = products.find(p => (p.codeModele === this.codeBar));
    });
    this.initZoneForm();
  }

  initZoneForm() {
    this.zoneFormGroup = this.formBuilder.group({
      zonecode: ['', [Validators.required, Validators.pattern(this.zoneBarCodePattern)]]
    });
  }

  onSubmitZoneForm() {
    let currentItemCodeBar: string = this.zoneFormGroup.get('zonecode').value;
    this.router.navigate(['zone']);
    console.log(currentItemCodeBar);
  }
}
