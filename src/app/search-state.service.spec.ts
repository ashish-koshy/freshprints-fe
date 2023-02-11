import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { SearchStateService } from './search-state.service';

describe('SearchStateService', () => {
    let service: SearchStateService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
        });
        service = TestBed.inject(SearchStateService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
