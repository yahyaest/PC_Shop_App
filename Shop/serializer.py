from rest_framework import serializers
from Shop.models import CPU, GPU, RAM,Monitor,Laptop,PcGamer, ORDER, Profile
from django.contrib.auth.admin import User

# CPU Serializer


class CPUSerializer(serializers.ModelSerializer):
    class Meta:
        model = CPU
        fields = '__all__'


# GPU Serializer
class GPUSerializer(serializers.ModelSerializer):
    class Meta:
        model = GPU
        fields = '__all__'


# RAM Serializer
class RAMSerializer(serializers.ModelSerializer):
    class Meta:
        model = RAM
        fields = '__all__'


# Monitor Serializer
class MonitorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Monitor
        fields = '__all__'


# Laptop Serializer
class LaptopSerializer(serializers.ModelSerializer):
    class Meta:
        model = Laptop
        fields = '__all__'


# PcGamer Serializer
class PcGamerSerializer(serializers.ModelSerializer):
    class Meta:
        model = PcGamer
        fields = '__all__'


# ORDER Serializer
class ORDERSerializer(serializers.ModelSerializer):
    class Meta:
        model = ORDER
        fields = '__all__'


# Profile Serializer
class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'


# User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
