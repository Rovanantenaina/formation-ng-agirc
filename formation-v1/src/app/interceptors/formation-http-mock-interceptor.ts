import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import clientMock from '../../assets/mock/client-mock.json';
type MockDetails = {
    url: string,
    data: any
}
// Liste des urls à mocker, n'oublié pas de désactiver dès que la ressource externe est disponible.
const MOCK_URLS: MockDetails[] = [
    {
        url: '/api/client',
        data: clientMock
    }
];

export class FormationHttpMockInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const mockFound: MockDetails  =  MOCK_URLS.find((mock: MockDetails): boolean => mock.url === request.url) as MockDetails;
        return of(new HttpResponse({status: 200, body: mockFound?.data}));
    }
}
