import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchResultModule } from '../search-result/search-result.module';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
    let component: SearchComponent;
    let fixture: ComponentFixture<SearchComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SearchComponent],
            imports: [SearchResultModule],
        }).compileComponents();

        fixture = TestBed.createComponent(SearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
