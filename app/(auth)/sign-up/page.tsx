import AuthForm from '@/components/AuthForm';
import { getLoggedInUser } from '@/lib/actions/user.actions';

const SignUpPage = async() => {
    const user = await getLoggedInUser()
    console.log('user' ,user);
    return (
        <section className="flex-center size-full max-sm:px-6">
        <AuthForm type="sign-up" />
      </section>
    );
};

export default SignUpPage;