import { Injectable } from '@angular/core';
import {IResponse} from "../utils/response";
import {HttpClient} from "@angular/common/http";
import {EntityDataService} from "../utils/entity-data.service";
import { END_POINTS } from '../utils/end-points';

@Injectable({
  providedIn: 'root'
})
export class ProgramaService extends EntityDataService<IResponse>{

  constructor(protected override httpClient: HttpClient) {
    super(httpClient, END_POINTS.api+END_POINTS.actividades.programas);
  }
}
