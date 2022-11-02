import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../interfaces';



@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  public currentUser: User;
  public isLoggedIn: boolean = false;

  constructor(
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    private afs: AngularFirestore,
  ) {
  }
  fetchCurrentUser() {
    return this.afAuth.authState.pipe(switchMap(user => {
      if (user === null || user === undefined) return of(null);
      return this.afs.doc<User>(`users/${user.uid}`).snapshotChanges()
    }));
  }

  // Sign up with email/password
  signUp(email, password) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  // Sign in with email/password
  signIn(email, password) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  setUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
      role: "user"
    }
    return userRef.set(userData, {
      merge: true
    })
  }

  forgotPassword(passwordResetEmail) {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      }).catch((error) => {
        window.alert(error)
      })
  }
  googleAuth() {
    return this.authLogin(new firebase.auth.GoogleAuthProvider());
  }

  authLogin(provider: firebase.auth.GoogleAuthProvider) {
    return this.afAuth.signInWithPopup(provider);
  }


  logOut() {
    this.afAuth.signOut().then(() => {
      window.location.href = "/";
    });
  }



}