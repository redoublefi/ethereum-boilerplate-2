export default function SignIn() {
  const { authenticate, isAuthenticated, authError, isAuthenticating } =
    useMoralis();

  const [email, setEmail] = useState("redouble.finance@gmail.com");
  const handleCustomLogin = async () => {
    await authenticate({
      provider: "magicLink",
      email: email,
      apiKey: "pk_live_5074FD80BF3F7EB9",
      network: "Mumbai",
    });

    return (
      <div className={styles.card}>
        <Image className={styles.img} src={Logo} width={80} height={80} />
        {isAuthenticating && <p className={styles.green}>Authenticating</p>}
        {authError && (
          <p className={styles.error}>{JSON.stringify(authError.message)}</p>
        )}
        <div className={styles.buttonCard}>
          <input
            type={"email"}
            className={styles.input}
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <button className={styles.loginButton} onClick={handleCustomLogin}>
            Login with Magic Link
          </button>
        </div>
      </div>
    );
  };
}
