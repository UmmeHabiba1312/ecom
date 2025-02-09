import { getSession } from '@/lib/session'
import Link from 'next/link';


const SignInButton = async () => {
    const session = await getSession();

    if (!session || !session.user) {
        return (
            <div className="flex items-center space-x-4">
                <Link href="auth/login" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition rounded-lg text-white">
                    Login
                </Link>
                <Link href="auth/signup" className="px-4 py-2 bg-green-600 hover:bg-green-700 transition rounded-lg text-white">
                    Sign up
                </Link>
            </div>
        );
    }

    return (
        <div className="flex items-center space-x-4">
            <p className="text-white font-medium">{session.user.username}</p>
            <form action="/api/auth/signout" method="GET">
                <button type="submit" className="px-4 py-2 bg-red-600 hover:bg-red-700 transition rounded-lg text-white">
                    Logout
                </button>
            </form>
        </div>
    );
};

export default SignInButton;
