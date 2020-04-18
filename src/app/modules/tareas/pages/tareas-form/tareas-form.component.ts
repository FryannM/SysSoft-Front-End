import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Tareas } from '../../models/tareas.models';
import { TareasService } from '../../tareas.service';
import { LayoutUtilsService, MessageType } from '../../../../core/_base/crud';
import { Router } from '@angular/router';
import { UsuariolistDto } from '../../../../modules/usuarios/models/usuario.models';
import { UsuarioService } from '../../../../modules/usuarios/usuario.service';
import { ProyectosDto } from '../../../../modules/proyectos/models/proyectos-models';
import { ProyectosService } from '../../../../modules/proyectos/proyectos.service';

@Component({
  selector: 'sys-tareas-form',
  templateUrl: './tareas-form.component.html'
})
export class TareasFormComponent implements OnInit {

  title: string = 'Crear Tareas';
  hasFormErrors = false;
  message = 'Tarea guarda  existosamente!'
  form: FormGroup
  backUrl = 'tareas';

  usuario$: UsuariolistDto[] = [];
  proyecto$: ProyectosDto[] = [];

  @Input()
  set tareas(value: Tareas) {
    value && this.form.patchValue(value);
  }
  @Input() tarea: Tareas;

  constructor(private fb: FormBuilder,
    private services: TareasService,
    private layoutUtilsService: LayoutUtilsService,
    private usuarioService: UsuarioService,
    private proyectoService: ProyectosService,
    private router: Router) { }

  onCreateForm() {
    this.form = this.fb.group({
      id: [0],
      titulo: ['', Validators.required],
      usuario: ['', Validators.required],
      proyecto: ['', Validators.required],
      estado: ['A', Validators.required],
      fecha: ['', Validators.required],
      comentario: ['']
    });
  }

  ngOnInit() {
    this.onCreateForm();
    this.usuarioService.getUsuarioList().subscribe(response => {
      this.usuario$ = response;
    });
    this.proyectoService.getProyectoslist().subscribe(response => {
      this.proyecto$ = response;
    })
  }


  onAlertClose($event) {
    this.hasFormErrors = false;
  }
  onSave() {
     console.log(this.form.value);
    if (this.form.invalid) {
      this.hasFormErrors = false;
      const controls = this.form.controls;
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched());
      this.hasFormErrors = true;
      return;
    }
    if (this.form.get('id').value !== 0) {
      this.services.updateTareas$(this.form.value).subscribe();
    } else {
      this.services.saveTareas$(this.form.value).subscribe();
    }
    this.layoutUtilsService.showActionNotification(this.message, MessageType.Create, 5000, true, true);
  }
  onBack() {
    this.router.navigate([this.backUrl]);
  }
  onReset() {
  }

}
