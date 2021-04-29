import { Component, OnInit } from '@angular/core';


import { Frase } from '../shared/frase.model'
import { FRASES } from './frases-mock'


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a Frase:'
  public resposta: string = ''


  public rodada: number = 0
  public rodadaFrase: Frase


  public progresso: number = 0

// Constructor to link 'rodadaFrase' and 'rodada' to this.rodada 

  constructor() { 
    this.rodadaFrase = this.frases[this.rodada]
    console.log(this.frases) 
  }

  ngOnInit(): void {
  }
// metodo atualizaResposta criado para dar inicio a logica
  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
    // console.log(this.resposta)
  }

  public verificarResposta(): void {

    if(this.rodadaFrase.frasePtBr == this.resposta){
      alert('Correto!')
  

    //trocar pergunta da rodada
    this.rodada++

    //progresso 100/frases dinamico
    this.progresso = this.progresso + (100 / this.frases.length)
    console.log(this.progresso)


    //atualiza o objeto rodadaFrase
    this.rodadaFrase = this.frases[this.rodada]

    //limpa resposta
    console.log(this.resposta)
    this.resposta = ''
    console.log

    
    

  } else {
    alert('Errado, tente novamente!')
  }
  }

}


