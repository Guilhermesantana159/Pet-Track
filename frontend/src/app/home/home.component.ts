import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/service/base-service.component';

@Component({
  selector: 'app-home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  //Variaveis operacionais
  usuarioLogado:boolean = false;

  constructor(private response: BaseService){
    response.logado.subscribe((bool: boolean) => {
      this.usuarioLogado = bool;
    });
  }

  ngOnInit(): void {
    this.usuarioLogado = window.localStorage.getItem('IdUsuario') != undefined;
  }
}
