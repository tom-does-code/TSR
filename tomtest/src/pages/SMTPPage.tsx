import { useLocation, useNavigate } from "react-router-dom";
import SMTPForm from "../components/SMTPForm";
import { verifyCode } from "../backend/auth";

export default function SMTPPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const email = location.state?.email;

    const handleVerify = async (code: string) => {
        const data = await verifyCode(email, code);
        if (data.success) {
            navigate('/dashboard');
        } else {
            alert('Invalid Code');
        }
    }


    const handleResend = async (code: string) => {

    }

    return (
        <div>
            <SMTPForm email={email} onResend={handleResend} onVerify={handleVerify}></SMTPForm>
        </div>
    )
}