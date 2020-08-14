import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Router } from '@angular/router';
import { Cliente } from '../../models/cliente.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {

  public clientes: Cliente[];

  constructor(private clienteService: ClienteService, private router: Router,
    private toast: ToastrService) {
    
  }

  ngOnInit(): void {
    this.getAll();
    sessionStorage.setItem('clienteSessao', '');
  }

  getAll() {
    this.clienteService.getAll()
      .subscribe(dataResult => {
        this.clientes = dataResult;
      },
      e => {
        console.log(e.error);
        this.toast.error(e.error, "Erro!");
      })
  }

  public adicionarCliente() {
    this.router.navigate(['clientes/cadastrar']);
  }

  public deletarCliente(cliente: Cliente) {
    var retorno = confirm("Deseja realmente excluir o cliente selecionado?");
    if (retorno == true) {
      this.clienteService.deletar(cliente.id).subscribe(
        dataResult => {
          console.log(dataResult);
          // reload component
          this.ngOnInit();
          // mostar aviso
          this.toast.error("cliente removido com sucesso", "Excluído!");
        },
        erro => {
          console.log(erro.error);
          this.toast.error(erro.error, "Erro!");
        });
    }
  }

  public editarCliente(cliente: Cliente) {
    sessionStorage.setItem('clienteSessao', JSON.stringify(cliente));
    this.router.navigate(['/clientes/cadastrar']);
  }
}
