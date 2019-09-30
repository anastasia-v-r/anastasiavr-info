#include <iostream>
#include <thread>
#include <chrono>

int main() {
    for(int i = 0; i < 1000; i++) {
        std::cout << "YUhhhhhhhhhhhhhh" << std::endl;
        std::this_thread::sleep_for(std::chrono::milliseconds(20));
    }
}