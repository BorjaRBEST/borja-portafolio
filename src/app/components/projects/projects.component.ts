import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  toggleProject(event: Event) {
    const projectElement = event.currentTarget as HTMLElement;
    const allProjects = document.querySelectorAll('.project');

    allProjects.forEach(project => {
      if (project !== projectElement) {
        project.classList.remove('expanded');
        const content = project.querySelector('.content') as HTMLElement;
        content.style.maxHeight = '0';
        content.style.opacity = '0';
      }
    });

    projectElement.classList.toggle('expanded');
    const content = projectElement.querySelector('.content') as HTMLElement;
    if (projectElement.classList.contains('expanded')) {
      content.style.maxHeight = `${content.scrollHeight}px`;
      content.style.opacity = '1';
    } else {
      content.style.maxHeight = '0';
      content.style.opacity = '0';
    }
  }
}
