import { ChangeDetectionStrategy, Component, computed, inject, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from '../../../core/services/layout.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { AuthService } from '../../../core/services/auth.service';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-top-bar',
  imports: [RouterModule, CommonModule, StyleClassModule, MenuModule, ButtonModule, AvatarModule],
  templateUrl: './top-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopBarComponent implements OnInit {
  public layoutService = inject(LayoutService);
  public authService = inject(AuthService);
  
  userMenuItems = computed<MenuItem[]>(() => {
    const user = this.authService.currentUser();
    return [
      {
        label: user?.email || 'Usuario',
        icon: 'pi pi-user',
        disabled: true,
        styleClass: 'font-semibold'
      },
      {
        separator: true
      },
      {
        label: 'Perfil',
        icon: 'pi pi-user-edit',
        command: () => {
          // TODO: Navegar a perfil cuando esté implementado
        }
      },
      {
        separator: true
      },
      {
        label: 'Cerrar Sesión',
        icon: 'pi pi-sign-out',
        command: () => {
          this.onLogout();
        }
      }
    ];
  });

  currentUserEmail = computed(() => {
    return this.authService.currentUser()?.email || 'Usuario';
  });

  userInitials = computed(() => {
    const email = this.currentUserEmail();
    if (email && email.includes('@')) {
      return email.charAt(0).toUpperCase();
    }
    return 'U';
  });

  ngOnInit() {
    this.layoutService.toggleDarkMode();
  }

  toggleDarkMode() {
    this.layoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
  }

  onLogout() {
    this.authService.logout();
  }
}
