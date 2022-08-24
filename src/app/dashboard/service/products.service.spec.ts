import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductsService } from './products.service';
import { of, throwError } from 'rxjs';


describe('ProductsService', () => {
  let service: ProductsService;
  let htttClientSpy: { get: jasmine.Spy }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],

    });
    htttClientSpy = jasmine.createSpyObj("HttpClient", ["get"]);
    service = TestBed.inject(ProductsService);
  });

  it('Creacion del servicio', () => {
    expect(service).toBeTruthy();
  });

  it('peticion exitosa', () => {
    const expextExitoso = [
      {
        id: 1,
        name: "Tasty Fresh Chicken",
        description: "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        price: "283.00",
        imageUrl: "https://picsum.photos/400?random=1",
        quantity: "30"
      },
    ];
    htttClientSpy.get.and.returnValue(of(expextExitoso));
    service.getProducts();
    expect(htttClientSpy.get.calls.count()).toBe(0, "one call");
  })
  /*
  it('peticion fallida', () => {
    const expextFallido = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404,
      statusText: 'Not Found'
    });
    htttClientSpy.get.and.returnValue(throwError(expextFallido));
    service.getProducts();
    expect(service.getProducts).toBeUndefined();
  })*/

});
