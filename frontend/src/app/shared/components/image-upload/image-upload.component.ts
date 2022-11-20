import { Observable } from 'rxjs';
import { Component, EventEmitter, Output } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireStorage } from "@angular/fire/storage";
import { map, finalize } from "rxjs/operators";

@Component({
  selector: "image-upload",
  templateUrl: "./image-upload.component.html"
})
export class ImageUploadComponent {
  downloadURL: Observable<string>;
  fb;
  constructor(private storage: AngularFireStorage) { }
  @Output() imageUrl = new EventEmitter();

  onFileSelected(event) {
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `Images/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`Images/${n}`, file);
    task.then((ref) => {
      ref.ref.getDownloadURL().then(url => {
        this.imageUrl.emit(url)
      })
    })
  }
}