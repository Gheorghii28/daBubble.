import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ChatModule } from './chat/chat.module';
import { ThreadComponent } from './chat/thread/thread.component';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { HomeRoutingModule } from './home-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DialogAddMembersComponent } from './dialogs/dialog-add-members/dialog-add-members.component';
import { DialogCreateChannelComponent } from './dialogs/dialog-create-channel/dialog-create-channel.component';
import { DialogEditChannelComponent } from './dialogs/dialog-edit-channel/dialog-edit-channel.component';
import { DialogMembersComponent } from './dialogs/dialog-members/dialog-members.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../services/auth.service';
import { DialogEditProfileComponent } from './dialogs/dialog-edit-profile/dialog-edit-profile.component';

@NgModule({
  providers: [AuthService],
  declarations: [
    ContentComponent,
    HeaderComponent,
    SidebarComponent,
    DialogAddMembersComponent,
    DialogCreateChannelComponent,
    DialogEditChannelComponent,
    DialogMembersComponent,
    DialogEditProfileComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ChatModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
  ],
})
export default class HomeModule {}
