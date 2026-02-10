import { useState } from "react";

interface SMTPFormProps {
    email: string;
    onVerify: (code: string) => void;
    onResend: (code: string) => void;
}

export default function SMTPForm({ email, onResend, onVerify }: SMTPFormProps) {
    const [code, setCode] = useState('');

    return(
        <div>
            <h1>Please enter the code sent to your email.</h1>
            <input type="text" placeholder="Verification Code" value={code} onChange={(e) => setCode(e.target.value)} />
            <button className="verifyButton" onClick={() => onVerify}>Verify</button>
        </div>
    )
}