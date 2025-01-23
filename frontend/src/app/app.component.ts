import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  contador = 0
  alterar=signal(false)
  ativador= computed(()=>{
    if(this.alterar()){
     
      return "ratimbum"
    }else{
      return "magicarp"
    }
  })
  cor =computed(()=>{
    if(this.alterar()){
      return "warn"
    }else{return 'info'}
  })
  change(){
    this.contador++
    if(this.contador%2==0){
      this.alterar.set(true)

    }
   else{
      this.alterar.set(false)

    }
  }
}
