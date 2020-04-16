import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario, Cargo } from '../../models/usuario.models';
import { UsuarioService } from '../../usuario.service';
import { LayoutUtilsService, MessageType } from '../../../../core/_base/crud';
import { Router } from '@angular/router';

@Component({
  selector: 'sys-usuario-form',
  templateUrl: './usuario-form.component.html',
  styles: []
})
export class UsuarioFormComponent implements OnInit {
  title: string = 'Crear Usuarios';
  Usuario = 'Datos Básicos'
  hasFormErrors = false;
  message = 'Usuario guardado  existosamente!'
  form: FormGroup
  backUrl = 'usuarios';

  cargo$: Cargo[] = [];

  @Input()
  set usuarios(value: Usuario) {
    value && this.form.patchValue(value);
  }
  @Input() usuario: Usuario;


  constructor(private fb: FormBuilder,
    private services: UsuarioService,
    private layoutUtilsService: LayoutUtilsService,
    private router: Router
  ) { }

  onCreateForm() {
    this.form = this.fb.group({
      id: [0, Validators.required],
      nombre: ['', Validators.required],
      nombreUsuario: ['', Validators.required],
      passWord: ['', Validators.required],
      email: ['', Validators.required],
      estado: ['A', Validators.required],
      cargo: ['', Validators.required],

    });
  }


  ngOnInit() {
    this.onCreateForm();
    this.services.getCargo().subscribe(response => {
      this.cargo$ = response;
    })
  }

  onAlertClose($event) {
    this.hasFormErrors = false;
  }
  onSave() {
    console.log("Formulario", this.form.value)
    if (this.form.invalid) {
      this.hasFormErrors = false;
      const controls = this.form.controls;
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched());
      this.hasFormErrors = true;
      return;
    }
    if (this.form.get('id').value !== 0) {
      debugger;
      this.services.updateUsuarios$(this.form.value).subscribe();
    } else {
      this.services.saveUsuarios$(this.form.value).subscribe();
      this.onReset();
    }
    this.layoutUtilsService.showActionNotification(this.message, MessageType.Create, 5000, true, true);
  }

  onBack() {
    this.router.navigate([this.backUrl]);
  }
  onReset() {
    this.form.reset();
  }
}
