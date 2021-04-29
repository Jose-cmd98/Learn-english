import { Component } from '@angular/core'


@Component({
    selector: 'app-topo', //serve para indicar onde o componente vai ser instanciado 

    templateUrl: '/topo.component.html',
    styleUrls: ['./topo.component.css']
    
 
})
export class TopoComponent {
    public titulo: string = 'Learning English'
}