import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {
  usuarioForm: FormGroup | undefined;

  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    const usuario: Usuario = this.usuarioForm.value;
    this.usuarioService.createUsuario(usuario).subscribe(
      () => {
        // Handle success
        console.log('Usuario Creado exitosamente');
      },
      (error) => {
        // Handle error
        console.error('Error al crear usuario:', error);
      }
    );
  }
}
