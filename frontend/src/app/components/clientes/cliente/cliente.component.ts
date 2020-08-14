import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente.model';
import { ClienteService } from '../../services/cliente.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  public cliente: Cliente;
  public ativar_spinner: boolean;
  public mensagem: string[];
  public clienteCadastrado: boolean;

  constructor(private clienteService: ClienteService, private router:Router,
    private toast: ToastrService) { }

  ngOnInit(): void {
    this.cliente = new Cliente();

    var clienteSessao = sessionStorage.getItem('clienteSessao');

    if (clienteSessao){
      this.cliente = JSON.parse(clienteSessao);
    }
  }


  public cadastrarCliente() {
    console.log(this.cliente);
    this.ativar_spinner = true;
    this.clienteService.save(this.cliente)
      .subscribe(
        dataJson => {
          this.clienteCadastrado = true;
          this.mensagem = null; // limpar mensagem
          this.ativar_spinner = false;
          this.router.navigate(['/clientes']);
          sessionStorage.setItem('clienteSessao', '');
          if (this.cliente.id)
          this.toast.info("cliente alterado com sucesso", "Sucesso!");
          else
          this.toast.success("cliente cadastrado com sucesso", "Sucesso!");
        },
        e => {
          this.mensagem = e.error;
          this.ativar_spinner = false;
        }
      )
  }

}
