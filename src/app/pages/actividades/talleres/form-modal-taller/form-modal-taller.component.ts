import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {TallerService} from "../../../../providers/services/taller.service";
import {ProgramaService} from "../../../../providers/services/programa.service";

@Component({
  selector: 'app-form-modal-taller',
  templateUrl: './form-modal-taller.component.html',
  styleUrls: ['./form-modal-taller.component.css']
})
export class FormModalTallerComponent implements OnInit {

  @Input() title: any;
  @Input() tallId: any;
  @Input() item: any;
  //@ts-ignore
  frmTaller: FormGroup;
  programas: any = [];

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder:FormBuilder,
    private tallerService:TallerService,
    private programaService: ProgramaService
  ) { }



  ngOnInit(): void {
    this.formInit(); //el formulario esta inicializado
    this.getProgramas();
    if(this.item){
      this.updateData();
    }
  }

  getProgramas(): void {
    this.programaService.getAll$().subscribe(response => {
      this.programas = response.data || [];
      console.log(this.programas);
    });
  }

  formInit(): void {
    const controls = {
      tallTema: ['', [Validators.required]],
      tallDesc: ['', [Validators.required]],
      tallFecha: ['', ],
      tallHora: ['', [Validators.required]],
      tallHoraAcademicas: ['', [Validators.required]],
      tallLugar: ['', [Validators.required]],
      progId: ['', [Validators.required]],
      programa: ['', [Validators.required]],
    };
    this.frmTaller= this.formBuilder.group(controls);// construir formulario
  }

  save(): void {
    let data = Object.assign(this.frmTaller.value, {programa: {progId: this.frmTaller.value.progId}});
    this.tallerService.add$(data).subscribe(response =>{
      if (response.success) {
        this.activeModal.close({success: true, message: response.message});
      }
    });//serializa y envia formato tipo JS
  }
  update(): void {

    this.tallerService.update$(this.tallId, this.frmTaller.value).subscribe(response => {
      if (response.success) {
        this.activeModal.close({success: true, message:response.message});
      }
    });
  }
  updateData(): void{
    let data = Object.assign(this.item, {progId: this.item.programa.progId});
    this.frmTaller.patchValue(data);
  }

}
