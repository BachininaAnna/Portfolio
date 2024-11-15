import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ProjectsService} from "../../shared/services/projects.service";
import {ProjectsType} from "../../../assets/type/projects";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit {
  private animElements: NodeListOf<HTMLElement> | null = null;
  public projects: ProjectsType[] | undefined;

  constructor(private projectsService: ProjectsService) {
  }

  ngOnInit() {
    this.projects = this.projectsService.getProjects();
  }

  ngAfterViewInit() {
    let observer = new IntersectionObserver(updates => {
      updates.forEach(update => {
        if (update.isIntersecting) {
          update.target.classList.add('visible');
        } /*else {
          update.target.classList.remove('visible');
        }*/
      });
    }, {threshold: 0});

    this.animElements = document.querySelectorAll('.animation');
    this.animElements?.forEach(element => observer.observe(element));
  }

  public scroll(element: HTMLElement) {
    element.scrollIntoView({behavior: 'smooth'});
  }
}
