class Solution:
    def distanceBetweenBusStops(self, distance: List[int], start: int, destination: int) -> int:
        a = min(start, destination)
        b = max(start, destination)
        return min(sum(distance[a:b]), sum(distance[b:]) + sum(distance[:a]))
    
