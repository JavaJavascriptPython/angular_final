import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit, OnDestroy {
  @Output() toggleMobileMenu = new EventEmitter<void>();
  
  currentDate = '';
  currentTime = '';
  greeting = 'Good Morning, Alex!';
  private timeInterval: any;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.updateDateTime();
    this.updateGreeting();
    this.timeInterval = setInterval(() => {
      this.updateDateTime();
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.timeInterval) {
      clearInterval(this.timeInterval);
    }
  }

  updateDateTime(): void {
    const now = new Date();
    
    // Format date
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    this.currentDate = now.toLocaleDateString('en-US', options);
    
    // Format time
    let hours = now.getHours();
    let minutes: string | number = now.getMinutes();
    let seconds: string | number = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    this.currentTime = `${hours}:${minutes}:${seconds} ${ampm}`;
  }

  updateGreeting(): void {
    const hour = new Date().getHours();
    
    if (hour < 12) {
      this.greeting = 'Good Morning, Alex!';
    } else if (hour < 18) {
      this.greeting = 'Good Afternoon, Alex!';
    } else {
      this.greeting = 'Good Evening, Alex!';
    }
  }

  getThemeIcon(): string {
    return this.themeService.getTheme() === 'light' ? 'fa-moon' : 'fa-sun';
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  onMobileToggle(): void {
    this.toggleMobileMenu.emit();
  }
}