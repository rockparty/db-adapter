import { ServiceAccount } from 'firebase-admin'
import { initializeApp, credential } from 'firebase-admin'

export function firestoreTestHelper() {
  const credentials: ServiceAccount = {
    clientEmail: 'firebase-adminsdk-6g6k3@vitrine-orp.iam.gserviceaccount.com',
    privateKey:
      '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCTkQTG/pZr9cXR\nn5hGYk2EQRQvulzc2lE2TYt3vs+XHg3d/FnEx6BYC11OtPO2ENqZHwiBEkzBjzfB\n1FBiOvuu/bCe7pbAG0iPuJvWIp06iKNXxHyBCd5m+6Yxs18T/+n1I+98TSnJRBc7\na6MhAdHdrMUsQGJritreZMsO7tKc1IZ4OQ5vTGlOKtRNAp8/KaZXKiCFeLuEyYAy\ntECTAj+vdb6PRF6nB6lhZf48XBARi9Q2jqvf3tql0fVtVHSKZQEv0qTxsMHBZPoq\nThiCVk7Dy/dOnvePs0a8lQRbFXwSss+ODkIuJk3Y9IFWY11l3sXCdIFj2OIPOuBq\n3jV4kQb7AgMBAAECggEAFtyEMh9rXBgW82YMwswO+KWBGZsp24NXyphn5NTNt2U4\nvm05K73GRG2k9oEdMqsuGpkkCaRf+iq/IiB2QEmlXVPAjawmnxDQWd0UCNroTehb\nmfN/BcTAImdBNPj2NWnT1p51xzrzIChpiv30J18Z+C8AhbMHLGRg38xwva8CjQ45\npOJynii+k+1nZnLuo+d6OdnTLHZqowlPX/i2NPI2asxjtKxtXgGMk+h5apGl2srC\nLL56RgKePLn0r0oVhZq4iq+3oWf6kcQyOnMFbJpbWBVSfRNt9tG6Bpnm34rSlMgL\n0cB81BqmnowhqBHKbrLtXs1LXVOqQet4OUfl2H/e0QKBgQDDXA0jdqTNa6Dvpu6G\n2RhQugy/C2jwKoR8jDbbz4Eii2c+3WMlS7Tw9A9ZURyn252jCAsSTg82wd1BadFk\nmYp3iCNtfbO1ZO63yLJm2jomCyuu1nsvtAZWaKlcjVMxV4MhBxE5e/lD/orzCZKB\n3FEl2r/zO/Rxf/IRWEWOa7LdCwKBgQDBXymOXMyNxO4AIrB6PaWicuBLpaIR2xaZ\nDlsded+oDUW9/gwev9tdUoFk+tYrt0Hy8yLKgGDkBYCO2c0yFGyaET1eR3u8VbPA\ncDE5M/bCih+aQ/Uoy3MpOiQn9E9kyGheRctpQiSh6JBFTiL+5mK2ky84cVBvzATM\npmaZlaBT0QKBgAWZ4wqMQUdeeZvFZntZSBgwbWMg2Z5hKbFEd+Ivfd1Wr9wejtQn\n6oUqCjKeX7r0Uf21olOhB1CjmEti1E0VFeI9df6Spw9hWHLOf0bxpM8obNUzcw64\nE6Jwl8J+js8QWkMdJ8JFKq1nY+Z59MhiX7U9I1m+81A5wd/7busZbWRnAoGALLvQ\nCEANjipliKB9xPmn7Km4m6dok8rkMmowx+PeyqivXqF7uk1V+QPSLUMd8qUFW6fF\nf6UtRPLE58cZAiHZcdbVJI9S36HP4I/Tw1DzH9QGNZDNES/npzztClUpXL5D7rMk\nuGf1w4LihTXrQJ6ZbXUlMmB8ZDCFV7aS+6qymVECgYA9MUeBIptKnDx5OHKWzXKZ\nuLW3fCPJR1LA9A2aQAkP49aN8eRpbx6+WwTQKlfKJa/V0sIiFrnhgWsVqV3QY3p1\nGuxA4vNL/KbHKpcmfZoieitaQf6MW1xoeE9D8J06qnCFg2ehv+77Q4R/A3NXCNon\n++NiFz0gaLjKgT4jSs3X2Q==\n-----END PRIVATE KEY-----\n',
    projectId: 'vitrine-orp',
  }
  const admin = initializeApp({
    credential: credential.cert(credentials),
  })
  const db = admin.firestore()
  return {
    db,
  }
}
