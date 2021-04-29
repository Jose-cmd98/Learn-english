import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit {

 //variavel progresso que corresponde a 25% da lifebar
  @Input() public progresso: number = 0

  constructor() { }

  ngOnInit(): void {
  }

}
