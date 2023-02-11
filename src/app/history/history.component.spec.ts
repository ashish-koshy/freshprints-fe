import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { SearchResultModule } from '../search-result/search-result.module';
import { SearchHistory, SearchResult } from '../search-state.service';

import { HistoryComponent } from './history.component';

describe('When history is empty', () => {
    let fixture: ComponentFixture<HistoryComponent>;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HistoryComponent],
            imports: [SearchResultModule, HttpClientModule],
        }).compileComponents();

        fixture = TestBed.createComponent(HistoryComponent);
        fixture.detectChanges();
    });

    it(`should display the message 'Search history is empty...'`, () => {
        const parent = fixture.nativeElement as HTMLElement;
        const p = parent?.querySelector('p') as HTMLParagraphElement;
        expect(p.innerHTML).toEqual('Search history is empty...');
    });
});

describe('When history is not empty', () => {
    let component: HistoryComponent;
    let fixture: ComponentFixture<HistoryComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HistoryComponent],
            imports: [SearchResultModule, HttpClientModule],
        }).compileComponents();

        fixture = TestBed.createComponent(HistoryComponent);
        component = fixture.componentInstance;
        const fakeHistory = new Map<string, SearchResult | null>();
        fakeHistory.set('User1', { login: 'User1' });
        fakeHistory.set('User2', null);
        fakeHistory.set('User3', { login: 'User3' });
        spyOn(
            component['searchStateService'],
            'getSearchHistory'
        ).and.returnValue(
            new BehaviorSubject<SearchHistory>(fakeHistory).asObservable()
        );
        fixture.detectChanges();
    });

    it(`should set the title 'Search history :'`, () => {
        const parent = fixture.nativeElement as HTMLElement;
        const p = parent?.querySelector('p') as HTMLParagraphElement;
        expect(p.innerHTML).toEqual('Search history :');
    });

    it(`should set the search term text as the user name corresponding to each user in the history`, () => {
        const parent = fixture.nativeElement as HTMLElement;
        const headers = parent?.querySelectorAll('h5');
        const list = Array.from(headers);
        expect(list[0]?.innerHTML).toEqual('User1');
        expect(list[1]?.innerHTML).toEqual('User2');
        expect(list[2]?.innerHTML).toEqual('User3');
    });
});
