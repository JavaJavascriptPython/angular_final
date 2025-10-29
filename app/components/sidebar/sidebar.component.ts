import { Component, Input, Output, EventEmitter } from '@angular/core';

interface MenuItem {
  label: string;
  icon: string;
  route: string;
  active: boolean;
  submenu?: SubMenuItem[];
}

interface SubMenuItem {
  label: string;
  route: string;
  active: boolean;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() isMobileMenuOpen = false;
  @Output() closeMobileMenu = new EventEmitter<void>();

  menuItems: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: 'fa-home',
      route: '/dashboard',
      active: true
    },
    {
      label: 'Analytics',
      icon: 'fa-chart-line',
      route: '/analytics',
      active: false,
      submenu: [
        { label: 'Reports', route: '/analytics/reports', active: true },
        { label: 'Statistics', route: '/analytics/statistics', active: false },
        { label: 'Charts', route: '/analytics/charts', active: false }
      ]
    },
    {
      label: 'E-commerce',
      icon: 'fa-shopping-cart',
      route: '/ecommerce',
      active: false,
      submenu: [
        { label: 'Products', route: '/ecommerce/products', active: false },
        { label: 'Orders', route: '/ecommerce/orders', active: false },
        { label: 'Customers', route: '/ecommerce/customers', active: false }
      ]
    },
    {
      label: 'Settings',
      icon: 'fa-cog',
      route: '/settings',
      active: false
    },
    {
      label: 'Profile',
      icon: 'fa-user',
      route: '/profile',
      active: false
    }
  ];

  toggleSubmenu(menuItem: MenuItem): void {
    if (menuItem.submenu) {
      // Close all other submenus
      this.menuItems.forEach(item => {
        if (item !== menuItem && item.submenu) {
          item.active = false;
        }
      });
      
      menuItem.active = !menuItem.active;
    } else {
      // Close mobile menu when clicking a menu item without submenu
      this.closeMobileMenu.emit();
    }
  }

  onSubmenuItemClick(): void {
    this.closeMobileMenu.emit();
  }
}