import {Component, Input, OnInit} from '@angular/core';
import {ProjectsType} from "../../../assets/type/projects";
import {ProjectsService} from "../../shared/services/projects.service";

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() project: ProjectsType | undefined;

  constructor() {
  }

  ngOnInit(): void {

  }

}
