from Shop.models import CPU, GPU, RAM, Monitor, Laptop,PcGamer, ORDER, Profile
from django.contrib.auth.admin import User
from rest_framework import viewsets, permissions
from .serializer import UserSerializer, CPUSerializer, GPUSerializer, RAMSerializer, MonitorSerializer, LaptopSerializer,PcGamerSerializer, ORDERSerializer, ProfileSerializer

# User Viewset


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()  #: No permission is required

    permission_classes = [
        permissions.AllowAny  #: No permission is required
        # permissions.IsAuthenticated
    ]
    serializer_class = UserSerializer


# CPU Viewset
class CPUViewSet(viewsets.ModelViewSet):
    queryset = CPU.objects.all()  #: No permission is required

    permission_classes = [
        permissions.AllowAny  #: No permission is required
        # permissions.IsAuthenticated
    ]
    serializer_class = CPUSerializer

    def post(self, request, *args, **kwargs):
        name = request.data['name']
        price = request.data['price']
        frequency = request.data['frequency']
        cache = request.data['cache']
        cores = request.data['cores']
        image = request.data['image']
        CPU.objects.create(name=name,
                           price=price,
                           frequency=frequency,
                           cache=cache,
                           cores=cores,
                           image=image)


# GPU Viewset
class GPUViewSet(viewsets.ModelViewSet):
    queryset = GPU.objects.all()  #: No permission is required

    permission_classes = [
        permissions.AllowAny  #: No permission is required
        # permissions.IsAuthenticated
    ]
    serializer_class = GPUSerializer

    def post(self, request, *args, **kwargs):
        name = request.data['name']
        price = request.data['price']
        frequency = request.data['frequency']
        memory = request.data['memory']
        image = request.data['image']
        GPU.objects.create(name=name,
                           price=price,
                           frequency=frequency,
                           memory=memory,
                           image=image)


# RAM Viewset
class RAMViewSet(viewsets.ModelViewSet):
    queryset = RAM.objects.all()  #: No permission is required

    permission_classes = [
        permissions.AllowAny  #: No permission is required
        # permissions.IsAuthenticated
    ]
    serializer_class = RAMSerializer

    def post(self, request, *args, **kwargs):
        name = request.data['name']
        price = request.data['price']
        capacity = request.data['capacity']
        frequency = request.data['frequency']
        image = request.data['image']
        RAM.objects.create(name=name,
                           price=price,
                           capacity=capacity,
                           frequency=frequency,
                           image=image)


# Monitor Viewset
class MonitorViewSet(viewsets.ModelViewSet):
    queryset = Monitor.objects.all()  #: No permission is required

    permission_classes = [
        permissions.AllowAny  #: No permission is required
        # permissions.IsAuthenticated
    ]
    serializer_class = MonitorSerializer

    def post(self, request, *args, **kwargs):
        name = request.data['name']
        price = request.data['price']
        resolution = request.data['resolution']
        size = request.data['size']
        refresh_rate = request.data['refresh_rate']
        image = request.data['image']
        Monitor.objects.create(name=name,
                               price=price,
                               resolution=resolution,
                               size=size,
                               refresh_rate=refresh_rate,
                               image=image)


# Laptop Viewset
class LaptopViewSet(viewsets.ModelViewSet):
    queryset = Laptop.objects.all()  #: No permission is required

    permission_classes = [
        permissions.AllowAny  #: No permission is required
        # permissions.IsAuthenticated
    ]
    serializer_class = LaptopSerializer

    def post(self, request, *args, **kwargs):
        name = request.data['name']
        price = request.data['price']
        cpu = request.data['cpu']
        gpu = request.data['gpu']
        ram = request.data['ram']
        hard_disk = request.data['hard_disk']
        screen_size = request.data['screen_size']
        image = request.data['image']
        Laptop.objects.create(name=name,
                              price=price,
                              cpu=cpu,
                              gpu=gpu,
                              ram=ram,                          hard_disk=hard_disk,
                              screen_size=screen_size,
                              image=image)


# PcGamer Viewset
class PcGamerViewSet(viewsets.ModelViewSet):
    queryset = PcGamer.objects.all()  #: No permission is required

    permission_classes = [
        permissions.AllowAny  #: No permission is required
        # permissions.IsAuthenticated
    ]
    serializer_class = PcGamerSerializer

    def post(self, request, *args, **kwargs):
        name = request.data['name']
        price = request.data['price']
        cpu = request.data['cpu']
        gpu = request.data['gpu']
        ram = request.data['ram']
        hard_disk = request.data['hard_disk']
        power = request.data['power']        
        mother_board = request.data['mother_board']
        pc_case = request.data['pc_case']
        image = request.data['image']
        PcGamer.objects.create(name=name,
                               price=price,
                               cpu=cpu,
                               gpu=gpu,
                               ram=ram,                          hard_disk=hard_disk,
                               power=power,                           mother_board=mother_board,
                               pc_case=pc_case,
                               image=image)


# ORDER Viewset
class ORDERViewSet(viewsets.ModelViewSet):
    queryset = ORDER.objects.all()  #: No permission is required

    permission_classes = [
        permissions.AllowAny  #: No permission is required
        # permissions.IsAuthenticated
    ]
    serializer_class = ORDERSerializer


# Profile Viewset
class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()  #: No permission is required

    permission_classes = [
        permissions.AllowAny  #: No permission is required
        # permissions.IsAuthenticated
    ]
    serializer_class = ProfileSerializer
