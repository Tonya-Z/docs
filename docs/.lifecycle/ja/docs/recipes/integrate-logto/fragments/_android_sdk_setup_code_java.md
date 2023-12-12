```java
import io.logto.sdk.android.LogtoClient;
import io.logto.sdk.android.type.LogtoConfig;
import io.logto.sdk.core.constant.PromptValue;

public class MainActivity extends AppCompatActivity {

    private LogtoClient logtoClient;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        // ...
        LogtoConfig logtoConfig = new LogtoConfig(
            "<あなたのlogtoエンドポイント>",  // 例: http://localhost:3001
            "<あなたのアプリID>",
            null,
            null,
            true,
            PromptValue.CONSENT
        );

        logtoClient = new LogtoClient(logtoConfig, getApplication());
    }
}
```