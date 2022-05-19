import {ComponentFixture, TestBed} from "@angular/core/testing";
import {FormBuilder} from "@angular/forms";

import {AlbumsListComponent} from "./albums-list.component";
import {AlbumsService} from "../../../core/services/albums.service";
import {PhotosService} from "../../../core/services/photos.service";

describe("AlbumsListComponent", () => {
  let component: AlbumsListComponent;
  let fixture: ComponentFixture<AlbumsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlbumsListComponent],
      providers: [FormBuilder, AlbumsService, PhotosService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("albums property default value is empty array", () => {
    expect(component.albums).toEqual([]);
  });
});
