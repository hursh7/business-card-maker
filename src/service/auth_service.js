import {
  firebaseAuth,
  githubProvider,
  facebookProvider,
  googleProvider,
} from './firebase';

class AuthService {
  login(providerName) {
    const authProvider = this.getProvider(providerName);
    return firebaseAuth.signInWithPopup(authProvider);
  }

  logout() {
    firebaseAuth.signOut();
  }

  onAuthChange(onUserChanged) {
    firebaseAuth.onAuthStateChanged(user => {
      onUserChanged(user);
    });
  }

  getProvider(providerName) {
    switch (providerName) {
      case 'Sign in with Google':
        return googleProvider;
      case 'Sign in with Github':
        return githubProvider;
      case 'Sign in with Facebook':
        return facebookProvider;
      default:
        throw new Error(`not supported provider: ${providerName}`);
    }
  }
}

export default AuthService;
