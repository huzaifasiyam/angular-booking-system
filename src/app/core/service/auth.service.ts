import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

/**
 * @interface User
 * Defines the structure for a user object.
 * This is a basic example; you can extend it with more user details.
 */
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
}

/**
 * @class AuthService
 * A service for handling user authentication, including login, signup,
 * and managing user data in local storage.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private static readonly USER_KEY = 'currentUser';
  private loggedInSubject = new BehaviorSubject<boolean>(this.hasUserInStorage());

  /**
   * An observable that emits the login status of the user.
   * Components can subscribe to this to react to auth state changes.
   */
  isLoggedIn$: Observable<boolean> = this.loggedInSubject.asObservable();

  constructor() { }

  /**
   * Checks if a user is stored in local storage.
   * @returns {boolean} True if a user is found, false otherwise.
   */
  private hasUserInStorage(): boolean {
    return !!localStorage.getItem(AuthService.USER_KEY);
  }

  /**
   * Saves user data to local storage.
   * @param {User} user - The user object to save.
   */
  private saveUser(user: User): void {
    localStorage.setItem(AuthService.USER_KEY, JSON.stringify(user));
    this.loggedInSubject.next(true);
  }

  /**
   * Retrieves the currently logged-in user from local storage.
   * @returns {User | null} The user object or null if no user is found.
   */
  public getUser(): User | null {
    const userJson = localStorage.getItem(AuthService.USER_KEY);
    return userJson ? JSON.parse(userJson) : null;
  }

  /**
   * Simulates a signup process.
   * @param {Omit<User, 'id'>} userDetails - The user details provided during signup.
   * @returns {Observable<User>} An observable that resolves with the new user object on success.
   */
  public signup(userDetails: Omit<User, 'id'>): Observable<User> {
    const newUser: User = {
      ...userDetails,
      id: Math.random().toString(36).substring(2, 9) // A simple unique ID generator
    };

    // Simulate a network delay for a real-world scenario
    return of(newUser).pipe(
      delay(1000), // 1 second delay
      tap(() => {
        // You would typically save this to a backend API here.
        // For this example, we save it directly to local storage.
        this.saveUser(newUser);
      })
    );
  }

  /**
   * Simulates a login process.
   * @param {string} email - The user's email for authentication.
   * @param {string} password - The user's password.
   * @returns {Observable<User>} An observable that resolves with the user object on successful login.
   */
  public login(email: string, password: string): Observable<User> {
    // In a real application, you would make an HTTP request to your backend.
    // For this example, we'll simulate a successful login.
    const user: User = {
      id: 'mock-user-123',
      firstName: 'John',
      lastName: 'Doe',
      email: email,
      mobileNumber: '+919876543210' // Mock mobile number
    };

    return of(user).pipe(
      delay(1000),
      tap(() => {
        this.saveUser(user);
      })
    );
  }

  /**
   * Logs out the current user by removing their data from local storage.
   * @returns {void}
   */
  public logout(): void {
    localStorage.removeItem(AuthService.USER_KEY);
    this.loggedInSubject.next(false);
  }
}