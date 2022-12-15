import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataOng, OngResponse } from 'src/objects/Ong/OngResponse';
import { PetResponse } from 'src/objects/Pet/PetResponse';
import { BaseService } from 'src/service/base-service.component';

@Component({
  selector: 'app-comunidade',
  templateUrl: './comunidade.component.html',
  styleUrls: ['./comunidade.component.css']
})
export class ComunidadeComponent{

  loading: boolean = false;
  lOngs: Array<DataOng> = [];

  constructor(private response: BaseService,private toastr: ToastrService,private router: Router,private route: ActivatedRoute) {
    this.loading = true;
    this.response.Get("Ong","ConsultarTodos/").subscribe(
      (response: OngResponse) =>{        
        if(response.sucesso){
          this.loading = false;
          response.data.itens.forEach(element =>{
            this.lOngs.push(element);
          });
        }
        else{
          this.toastr.error("Houve um problema ao consultar as ongs volte mais tarde!","Mensagem")
        }
      }
    );
  }
}
