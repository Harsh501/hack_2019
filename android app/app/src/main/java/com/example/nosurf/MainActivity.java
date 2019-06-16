package com.example.nosurf;

import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.NotificationCompat;
import androidx.core.app.NotificationManagerCompat;

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;

public class MainActivity extends AppCompatActivity
{
    public static final String EXTRA_MESSAGE = "com.example.nosurf.MESSAGE";
    private NotificationManagerCompat notificationManager;

    /** Called when the user taps the Send button */
    public void sendMessage(View view) {
        Intent intent = new Intent(this, DisplayMessageActivity.class);
        EditText editText = (EditText) findViewById(R.id.editText);
        String message = editText.getText().toString();
        intent.putExtra(EXTRA_MESSAGE, message);
        startActivity(intent);
    }


    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Creating Notification Channel
        NotificationChannel liveLife = new NotificationChannel("liveLife", "liveLife", NotificationManager.IMPORTANCE_HIGH);
        liveLife.setDescription("Get a life");
        NotificationManager manager = getSystemService(NotificationManager.class);
        manager.createNotificationChannel((liveLife));

        notificationManager = NotificationManagerCompat.from(this);
    }


    public void showNotification(View v)
    {
        Notification builder = new NotificationCompat.Builder(this, "liveLife")
                .setSmallIcon(R.drawable.unbrella)
                .setContentTitle("tatta")
                .setContentText("singh")
                .setPriority(NotificationCompat.PRIORITY_HIGH)
                .build();

        notificationManager.notify(1, builder);

    }
}
