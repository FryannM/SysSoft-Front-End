import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Team } from '../../models/teams.model';
import { TeamsService } from '../../teams.service';
import { LayoutUtilsService, MessageType } from '../../../../core/_base/crud';
import { Router } from '@angular/router';
import { ProyectosService } from '../../../../modules/proyectos/proyectos.service';
import { ProyectosDto } from '../../../../modules/proyectos/models/proyectos-models';

@Component({
  selector: 'sys-teams-form',
  templateUrl: './teams-form.component.html'
})
export class TeamsFormComponent implements OnInit {

  title: string = 'Crear Teams';
  Company = 'Datos Básicos'
  hasFormErrors = false;
  message = 'Teams guardado  existosamente!'
  form: FormGroup
  backUrl = 'teams';

  @Input()
  set teams(value: Team) {
    value && this.form.patchValue(value);
  }
  @Input() team: Team;

 proyectos$ : ProyectosDto[] = []

  constructor(private fb: FormBuilder,
    private services: TeamsService,
    private layoutUtilsService: LayoutUtilsService,
    private router: Router,
    private proyectoServices : ProyectosService) { }

  onCreateForm() {
    this.form = this.fb.group({
      id: [0],
      descripcion: ['', Validators.required],
      cantidadIntegrantes: ['', Validators.min(2)],
      fechaCreacion: ['', Validators.required],
      estado: ['A', Validators.required],
      proyecto: ['A', Validators.required]

    });
  }

  ngOnInit() {
    this.onCreateForm();
     this.proyectoServices.getProyectoslist().subscribe( response => {
        this.proyectos$ = response;
     });
  }

  onAlertClose($event) {
    this.hasFormErrors = false;
  }
  onSave() {

    if (this.form.invalid) {
      this.hasFormErrors = false;
      const controls = this.form.controls;
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched());
      this.hasFormErrors = true;
      return;
    }
    if (this.form.get('id').value !== 0) {
      this.services.updateTeams$(this.form.value).subscribe();
    } else {
     this.services.saveTeams$(this.form.value).subscribe();
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
