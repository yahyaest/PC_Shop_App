# Generated by Django 3.1 on 2021-10-12 11:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Shop', '0008_monitor'),
    ]

    operations = [
        migrations.AlterField(
            model_name='monitor',
            name='resolution',
            field=models.CharField(max_length=100),
        ),
    ]
