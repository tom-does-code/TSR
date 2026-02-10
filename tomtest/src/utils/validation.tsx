export const checkString = (email: string, password: string): boolean => {
    if (email.length > 0 && password.length > 0) {
        return true;
    } else {
        return false;
    }
  }
