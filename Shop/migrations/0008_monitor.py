# Generated by Django 3.1 on 2021-10-12 11:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Shop', '0007_auto_20201111_2014'),
    ]

    operations = [
        migrations.CreateModel(
            name='Monitor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('price', models.IntegerField(default=0)),
                ('resolution', models.IntegerField(default=0)),
                ('size', models.IntegerField(default=0)),
                ('refresh_rate', models.IntegerField(default=0)),
                ('image', models.ImageField(blank=True, null=True, upload_to='')),
                ('hardware_type', models.CharField(default='Monitor', max_length=100)),
            ],
        ),
    ]
