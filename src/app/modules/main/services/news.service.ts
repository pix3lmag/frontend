import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

const DEFAULT_LIMIT = 25;
const DEFAULT_OFFSET = 0;

const TITLES = [
  'Ex pro tollit accusata',
  'Quando iriure ancillae vix',
  'Scaevola constituam vim ne',
  'Mei ne dicam suavitate',
  'An commune detracto splendide',
  'Ea quo euismod phaedrum'
];

const INTRODUCTIONS = [
  'Eos verear oporteat gloriatur id. Eu usu tempor tacimates, impedit eligendi accusamus te pro. Quot nemore has ea, ne per porro saperet, ad eros sale his. Te purto postulant contentiones sea.',
  'At tale etiam offendit vim, usu vide sensibus et. Postea utroque maluisset ei vix, salutandi facilisis cum ut. Reque cetero oportere ius te. Ad homero patrioque his, per cu graeco mollis. Oblique honestatis ex vix, dicta timeam honestatis sea ex.',
  'Sit tibique democritum instructior ne. Mel brute movet bonorum te, te mea eruditi iudicabit definitionem. Ut cum essent debitis epicurei, sea enim viris te. Animal omittantur mediocritatem te eos, ei atqui liber copiosae pro. Ex platonem vituperata mea, timeam aliquando vim ea. An alia mundi mandamus quo, utinam tamquam tractatos ex sea.',
  'Ne est dicat principes, facer tantas moderatius te mei. Qui malorum pericula disputando at. Qui offendit intellegat intellegebat no, ex vitae saperet nam. Duo salutatus hendrerit necessitatibus ut, mel tibique tincidunt conclusionemque cu, has errem corrumpit no. Ut epicuri fierent reformidans usu.',
  'Pri maiorum efficiantur te, an has sumo agam eligendi. Sit diam minimum ut, mundi decore mandamus et vel. Has molestie placerat imperdiet ut, quo epicuri appellantur accommodare ea, et atqui maiestatis intellegebat qui. Pertinax prodesset pro cu. Vix cu mutat discere, sed albucius conceptam in, alienum antiopam te eos.',
  'Te summo splendide eloquentiam quo, illum ignota tibique vix at, id cum movet nusquam repudiandae. Pri cu melius definitiones, id eum omnium habemus signiferumque, error scaevola consequuntur his et. Decore omnesque forensibus ex mea. Habeo causae at est. Nam eu noster maluisset, ullum quodsi id sed. At mel essent iracundia temporibus, his ad case causae suavitate.',
  'Quodsi invidunt id pro, eligendi consulatu ex has. Te quem scribentur sea, ne eos erat perfecto liberavisse, at tempor dolorum ancillae cum. Ius ea enim nominavi. Eu sit qualisque inciderint eloquentiam. Legimus contentiones at sed. Has quidam hendrerit eloquentiam cu, nec ex adhuc deleniti erroribus, vel exerci aliquip invenire in. Has vide democritum concludaturque te, dicit delenit an mel, utamur intellegat mea in.'
];

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  news: any[] = [];
  view: any[] = [];
  constructor() {
    this.news = this.loadNews();
  }

  private getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  private addDays(days: number) {
    const date = new Date();
    date.setDate(date.getDate() - this.getRandomInt(days));
    return date;
  }

  private loadNews(): any[] {
    const result: any[] = [];
    for (let i = 0; i < 50; i++) {
      const id = this.getRandomInt(1023);
      const createdAt = this.addDays(20);
      const createdBy = 'Author McAwesome';
      const createdById = 1;
      const categoryId = this.getRandomInt(4) + 1;
      result.push({
        id,
        title: TITLES[this.getRandomInt(TITLES.length - 1)],
        image: `https://picsum.photos/id/${id}/1920/1080`,
        createdAt,
        createdBy,
        createdById,
        categoryId,
        introduction: INTRODUCTIONS[this.getRandomInt(INTRODUCTIONS.length - 1)]
      });
    }
    return result.sort((a, b) => b.createdAt - a.createdAt);
  }

  get(categoryId?: number, limit?: number, offset?: number): Observable<any[]> {
    limit = limit || DEFAULT_LIMIT;
    offset = offset || DEFAULT_OFFSET;
    this.view = this.news;
    if (categoryId !== null) {
      this.filterByCategoryId(categoryId);
    }
    this.handleOffset(limit, offset);
    return of(this.view);
  }

  private handleOffset(limit?: number, offset?: number) {
    if (limit != null) {
      let end = limit + offset;
      if (end > this.view.length) {
        end = this.view.length;
      }
      this.view = this.view.slice(offset, end);
    }
  }

  private filterByCategoryId(id: number) {
    this.view = this.view.filter(news => news.categoryId === id);
  }
}
