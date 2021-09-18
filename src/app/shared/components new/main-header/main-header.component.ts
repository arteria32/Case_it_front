import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  constructor() { 
  }
  selectedScript="Исходное состояние";
  scriptData=["Исходное состояние","Предсказание ЧП","Рекомендации по корректировке работы буровой","Моделирование ситуции"]
  ngOnInit() {
  }

}
