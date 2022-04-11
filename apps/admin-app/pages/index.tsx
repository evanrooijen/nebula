import { Button } from '@nebula/ui';
import { signOut, useSession } from 'next-auth/react';
import { signIn } from 'next-auth/react';

export function Index() {
  const { status } = useSession();
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div>
      <h1>Welcome admin-app</h1>
      {status === 'loading' ? (
        <p>Loading...</p>
      ) : status === 'unauthenticated' ? (
        <Button onClick={() => signIn()}>Signin</Button>
      ) : (
        <Button onClick={() => signOut()}>Signout</Button>
      )}
    </div>
  );
}

export default Index;
