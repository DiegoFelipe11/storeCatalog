import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [ProductsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Creacion del componente productos', () => {
    expect(component).toBeTruthy();
  });

});
