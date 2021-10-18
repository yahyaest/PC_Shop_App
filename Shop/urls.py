from rest_framework import routers
from .api import UserViewSet, CPUViewSet, GPUViewSet, RAMViewSet,MonitorViewSet,LaptopViewSet,PcGamerViewSet, ORDERViewSet, ProfileViewSet

router = routers.DefaultRouter()
router.register('user', UserViewSet, 'user')
router.register('cpu', CPUViewSet, 'cpu')
router.register('gpu', GPUViewSet, 'gpu')
router.register('ram', RAMViewSet, 'ram')
router.register('monitor', MonitorViewSet, 'monitor')
router.register('laptop', LaptopViewSet, 'laptop')
router.register('pcGamer', PcGamerViewSet, 'pcGamer')
router.register('order', ORDERViewSet, 'order')
router.register('profile', ProfileViewSet, 'profile')


urlpatterns = router.urls
