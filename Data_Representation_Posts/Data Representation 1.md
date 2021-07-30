Hello everyone!

In this post we discuss the different representation techniques in time series literature and some of its use cases in general problem scenarios or model building. If you are someone new to the field of time series analysis or planning to work on it, we highly recommend you to read this article. This article is a part of a series, and in this first article we will discuss general data representation with its different forms and then finally talk about the time series data representation technique.

## Data Representation - What, Why and How?

Before diving into the nitty-gritty details of the topic, it is important to first know what exactly is data representation, why one needs to study them, and how to use and apply them for any given problem statement. 

### What

It simply means representation of any time series data in a specific form. 

Below is the example of the same data being represented in different forms -
<br>
<p align="center">
  <img src="https://github.com/algoasylum/SatelliteImageAnalysis/blob/master/Data_Representation_Images/img1.png" alt="Image"><br>
  <em>Data in Time Series</em>
</p>
<br>
<br>
<p align="center">
  <img src="https://github.com/algoasylum/SatelliteImageAnalysis/blob/master/Data_Representation_Images/img2.png" alt="Image"><br>
  <em>Data in Frequency Domain (Fourier Transform - Real (L) and Imaginary (R))</em>
</p>
<br>

The different forms of representing any time series data will be discussed below. 

### Why

Data is an integral and essential component to any problem that needs to be tackled. Some problems require the data to have some specific qualities, which the regular time series representation is unable to provide. For example, if it is specifically required that data should be as compressed as possible without any loss, then the right hand diagram of frequency above would be a better representation as compared to the left one. This is because using the frequency domain, the same data is captured using only a few points as compared to the number of samples in the original signal. There are several other examples which we’ll be covering in this series of articles, which will help you understand the importance of studying this topic before starting out to work with time series data.

### How

So the 6 data representation forms that we will be covering are -  

  * Time series
  * Frequency domain, including - 
  * Fourier Transform (Only Magnitude) 
  * Fourier Transform (Magnitude and Phase)
  * Fourier Transform (Real and Imaginary)
  * Histogram of time series
  * Log-frequency domain
  * Cepstrum
  * Gaussian Mixture Model (GMM)

## Time Series

So this is the standard form of representing any time series data. It has data points at their corresponding time stamps.

Examples of this representation are - 
<br>
<p align="center">
  <img src="https://github.com/algoasylum/SatelliteImageAnalysis/blob/master/Data_Representation_Images/img3.png" alt="Image"><br>
</p>
<br>
<p align="center">
  <img src="https://github.com/algoasylum/SatelliteImageAnalysis/blob/master/Data_Representation_Images/img4.png" alt="Image"><br>
</p>
<br>

The implementation of this form is also pretty straightforward -

```python
import matplotlib.pyplot as plt
plt.plot(time_stamps, data)
plt.show()
```
The most important question which needs to be asked now is - **_How should one know if time series is the ideal data representation form for their case?_**

So following are the key points to keep in mind before finalizing time series as a representation -

* Time series representation is the ideal representation if the time information in the data is important for the problem you are trying to tackle. Meaning, if the time stamps corresponding to the data samples are significant to you, then go ahead with this representation, since all the other representation forms listed above lose the time information of the signal. Let us show you an example to illustrate this -

  Below is an example of data represented in time series form. We can see that every data point has its corresponding time stamp (X-axis). 

<br>
<p align="center">
  <img src="https://github.com/algoasylum/SatelliteImageAnalysis/blob/master/Data_Representation_Images/img5.png" alt="Image"><br>
</p>
<br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Now if we look at the histogram of this data below, we can observe that the time information of the data (the time stamps) is 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;completely lost. The X-axis here represents “Bins”, and the Y-axis represents “Frequency”. 

<br>
<p align="center">
  <img src="https://github.com/algoasylum/SatelliteImageAnalysis/blob/master/Data_Representation_Images/img6.png" alt="Image"><br>
</p>

* This representation requires an equal number of components to represent the signal as the number of samples present in the data. In Fig. 1, 500 (x,y) points are used to make the signal, so to accurately represent the signal in time series form, we will have to use all the points i.e (500 x 2 (value and their corresponding timestamp))

<br>

So that is it about the time series representation! We hope it helped you!

To read more about time series, you can check out [this comprehensive article](https://www.influxdata.com/what-is-time-series-data/) in it.



