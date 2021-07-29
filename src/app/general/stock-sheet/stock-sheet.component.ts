import { Component, OnInit } from '@angular/core';
import { InfoLine } from '../../model/infoLine.model';
import { InfoModele } from '../../model/infoModele.model';
import { RayonService } from '../../services/rayon.service';

@Component({
  selector: 'app-stock-sheet',
  templateUrl: './stock-sheet.component.html',
  styleUrls: ['./stock-sheet.component.scss']
})
export class StockSheetComponent implements OnInit {
  infoModele: InfoModele;

  constructor(private rayonService: RayonService) { }

  ngOnInit(): void {
    this.infoModele = this.rayonService.infoModele;
    console.log(this.infoModele);
  }

  setEtat(infoline: InfoLine) {
    infoline.open = !infoline.open;
  }

}
